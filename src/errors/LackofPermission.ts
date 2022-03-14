export class LACK_OF_PERMISSION extends Error {
    statusCode: number;
  
    description: string;
  
    constructor(permission:any) {
      super();
      this.statusCode = 403;
      this.description = 'Lack_OF_Permission';
      this.message = `User does not have required ${permission} permission to perform an operation`;
    }
  }
  