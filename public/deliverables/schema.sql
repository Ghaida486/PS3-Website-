CREATE TABLE `design_claims` (
	`id` text PRIMARY KEY NOT NULL,
	`design_id` integer NOT NULL,
	`claim_type` text NOT NULL,
	`claim_text` text NOT NULL,
	`source_id` text,
	`status` text NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`design_id`) REFERENCES `designs`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`source_id`) REFERENCES `sources`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_claims_design` ON `design_claims` (`design_id`);--> statement-breakpoint
CREATE TABLE `countries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`data` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `decisions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`decision` text NOT NULL,
	`reason` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `designs` (
	`id` integer PRIMARY KEY NOT NULL,
	`country` text NOT NULL,
	`assumptions` text NOT NULL,
	`updated_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `metrics` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`country_id` text NOT NULL,
	`metric_name` text NOT NULL,
	`value` real,
	`unit` text NOT NULL,
	`reporting_period` text NOT NULL,
	`source_id` text NOT NULL,
	`retrieved_at` text NOT NULL,
	`notes` text,
	FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`source_id`) REFERENCES `sources`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_metrics_country_name` ON `metrics` (`country_id`,`metric_name`);--> statement-breakpoint
CREATE TABLE `ai_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_requests_user_time` ON `ai_requests` (`user_id`,`created_at`);--> statement-breakpoint
CREATE TABLE `sources` (
	`id` text PRIMARY KEY NOT NULL,
	`publisher` text NOT NULL,
	`title` text NOT NULL,
	`url` text NOT NULL,
	`period` text,
	`notes` text,
	`accessed_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text,
	`team` text NOT NULL,
	`role` text DEFAULT 'viewer' NOT NULL,
	`registered_at` text NOT NULL
);
