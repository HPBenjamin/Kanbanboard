export class Ticket {
    firstName: string;
    lastName: string;
    birthDate: string;
    projectTitle: string;
    category: string;
    comment: string;
    endDate: number;
    urgency: string;
    customIdName: string;
    id: number;
    status: string;


    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.projectTitle = obj ? obj.projectTitle : '';
        this.category = obj ? obj.category : '';
        this.comment = obj ? obj.comment : '';
        this.endDate = obj ? obj.endDate : '';
        this.urgency = obj ? obj.urgency : '';
        this.customIdName = obj ? obj.urgency : '';
        this.id = obj ? obj.urgency : '';
        this.status = obj ? obj.urgency : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            projectTitle: this.projectTitle,
            category: this.category,
            comment: this.comment,
            endDate: this.endDate,
            urgency: this.urgency,
            customIdName: this.customIdName,
            id: this.id,
            status: this.status 
        }
    }
}