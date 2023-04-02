export interface BaseResponse<Type> {
    result: Type,
    error: ErrorResponse
}

export type ErrorResponse = {
    message: string
}