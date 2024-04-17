export interface IAppMetadata {
  provider: string
  providers: string[]
}

export interface IUserMetadata {
  avatar: string
  email: string
  email_verified: boolean
  first_name: string
  is_seller: boolean
  last_name: string
  phone_verified: boolean
  sub: string
}

export interface IdentityData extends IUserMetadata {
  rating: number | null
}

export interface Identity {
  identity_id: string
  id: string
  user_id: string
  identity_data: IdentityData
  provider: string
  last_sign_in_at: string
  created_at: string
  updated_at: string
  email: string
}

export interface IUserData {
  id: string
  aud: string
  role: string
  email: string
  email_confirmed_at: string
  phone: string
  confirmed_at: string
  last_sign_in_at: string
  app_metadata: IAppMetadata
  user_metadata: IUserMetadata
  identities: Identity[]
  created_at: string
  updated_at: string
  is_anonymous: boolean
}
