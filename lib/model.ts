export const defaults={utilisation:65,pue:1.25,electricity:0.15,leaseRate:2.5,gpuCost:25000,facilityPerMW:10,gridCost:30,discount:8,interest:6,debtShare:60,idlePower:35,hybridUtil:75};
export type Inputs=typeof defaults;export type Option='build'|'lease'|'hybrid';export type Scenario='base'|'delay'|'half';
export const optionNames={build:'Build & own',lease:'Lease capacity',hybrid:'Phased hybrid'};
export const scenarioNames={base:'Base case',delay:'Grid +12 months',half:'Half utilisation'};
export function model(a:Inputs,option:Option,scenario:Scenario='base'){
 const u=a.utilisation/100*(scenario==='half'?.5:1),demand=16000*8760*u,scale=option==='build'?1:option==='hybrid'?.4:0;
 const facility=25*scale*a.facilityPerMW,grid=a.gridCost*scale,gpus=16000*scale,fleet=gpus*a.gpuCost/1e6,open=scale?3+(scenario==='delay'?1:0):1;
 const principal=(facility+grid)*a.debtShare/100,rate=a.interest/100;
 let outstanding=0;const rows=[];let cumulative=0;
 for(let year=0;year<=10;year++){
 const facilityCapex=year===0?facility*.5:year===1?facility*.5+grid:0;
 const gpuCapex=scale&&(year===open-1||(year>open&&((year-open)%4===0)))?fleet:0;
 const active=scale&&year>=open;
 const ownedHours=active?Math.min(demand,gpus*8760*(option==='build'?u:a.hybridUtil/100)):0;
 const ownUtil=gpus?ownedHours/(gpus*8760):0;
 const energy=active?(20*scale*a.pue*8760/1000)*(a.idlePower/100+(1-a.idlePower/100)*ownUtil):0;
 const electricity=energy*a.electricity; // GWh × GBP/kWh = GBP million
 const staffing=active? (option==='build'?5:3):year>0&&year<open&&scale?1*scale:0;
 const maintenance=active?(facility*.025+fleet*.03):0;
 const network=year>0?(active?1.5*scale:.5):0;
 const cloud=year>0?(demand-ownedHours)*a.leaseRate/1e6:0;
 const loanDraw=facilityCapex*a.debtShare/100;outstanding+=loanDraw;
 const interest=year>0?outstanding*rate:0;
 let repayment=active?Math.min(outstanding,principal/10):0;
 if(year===10)repayment=outstanding;outstanding-=repayment;
 const opex=electricity+staffing+maintenance+network+cloud;
 const total=facilityCapex+gpuCapex+opex+interest;cumulative+=total;
 const equityCash=total-loanDraw+repayment;
 rows.push({year,facilityCapex,gpuCapex,electricity,staffing,maintenance,network,cloud,opex,interest,loanDraw,repayment,equityCash,ownedHours,productiveHours:year?demand:0,energy,total,cumulative});
 }
 const pvCost=rows.reduce((s,r)=>s+r.total/(1+a.discount/100)**r.year,0),pvHours=rows.reduce((s,r)=>s+r.productiveHours/(1+a.discount/100)**r.year,0);
 const before=rows.filter(r=>r.year<open),annual=rows.find(r=>r.year===open)!;
 const unusedAnnual=scale?((facility+grid)/20+fleet/4+(annual.staffing+annual.maintenance+annual.network))*(1-annual.ownedHours/(gpus*8760)):0;
 return {option,scenario,open,demand,facility,grid,fleet,gpus,rows,pvCost,unitCost:pvCost*1e6/pvHours,cashBefore:before.reduce((s,r)=>s+r.total,0),equityBefore:before.reduce((s,r)=>s+r.equityCash,0),annualOpex:annual.opex,annualEnergy:annual.energy,capitalAtRisk:facility+grid+fleet+before.reduce((s,r)=>s+r.interest,0),unusedAnnual,total:rows.at(-1)!.cumulative};
}
export function validInputs(raw:unknown):Inputs{const r=raw as Record<string,unknown>;const bounds:Record<keyof Inputs,number[]>={utilisation:[5,95],pue:[1.05,1.8],electricity:[.03,.5],leaseRate:[.25,10],gpuCost:[5000,80000],facilityPerMW:[3,25],gridCost:[0,150],discount:[0,20],interest:[0,20],debtShare:[0,80],idlePower:[10,70],hybridUtil:[30,90]};const out={...defaults};for(const k of Object.keys(defaults) as (keyof Inputs)[]){if(typeof r?.[k]!=='number'||!Number.isFinite(r[k])||Number(r[k])<bounds[k][0]||Number(r[k])>bounds[k][1])throw new Error('Invalid assumption: '+k);out[k]=Number(r[k]);}return out;}
export const gbp=(v:number)=>'£'+v.toFixed(1)+'m';
