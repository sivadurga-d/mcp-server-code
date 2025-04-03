export function formatResponse(data: any, message: string = 'Success', status: number = 200) {
    return {
        status,
        message,
        data,
    };
}

export function logError(error: Error) {
    console.error(`[ERROR] ${new Date().toISOString()}: ${error.message}`);
}