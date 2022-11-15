export interface Logger {

    /**
     * Build a log thing, so anythying that uses Test can log.
     */
    log: (message: unknown) => undefined;
    
}
