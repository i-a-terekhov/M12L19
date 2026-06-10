export type LoginResponseType = {
    error: boolean,
    accessToken?: string,
    refreshToken?: string,
    fullName?: string,
    userId?: number,
    email?: string,
    message: string,
}