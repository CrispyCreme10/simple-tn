/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Accounts = "accounts",
	Categories = "categories",
	Transactions = "transactions",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum AccountsAccountTypeOptions {
	"checking" = "checking",
	"savings" = "savings",
	"credit_card" = "credit_card",
}
export type AccountsRecord = {
	account_type: AccountsAccountTypeOptions
	currency_code: string
	name: string
	user_id?: RecordIdString
}

export type CategoriesRecord = {
	description: string
	name: string
}

export enum TransactionsTypeOptions {
	"credit" = "credit",
	"debit" = "debit",
	"transfer" = "transfer",
	"payment" = "payment",
}
export type TransactionsRecord = {
	account_id?: RecordIdString
	amount?: number
	category_id?: RecordIdString
	currency_code: string
	date?: IsoDateString
	description?: string
	type?: TransactionsTypeOptions
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AccountsResponse<Texpand = unknown> = Required<AccountsRecord> & BaseSystemFields<Texpand>
export type CategoriesResponse<Texpand = unknown> = Required<CategoriesRecord> & BaseSystemFields<Texpand>
export type TransactionsResponse<Texpand = unknown> = Required<TransactionsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	accounts: AccountsRecord
	categories: CategoriesRecord
	transactions: TransactionsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	accounts: AccountsResponse
	categories: CategoriesResponse
	transactions: TransactionsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'accounts'): RecordService<AccountsResponse>
	collection(idOrName: 'categories'): RecordService<CategoriesResponse>
	collection(idOrName: 'transactions'): RecordService<TransactionsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
