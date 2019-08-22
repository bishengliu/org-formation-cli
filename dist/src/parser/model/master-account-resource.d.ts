import { IResource, IResourceRef, TemplateRoot } from '../parser';
import { AccountResource } from './account-resource';
export interface IMasterAccountProperties {
    RootEmail: string;
    AccountName: string;
    AccountId: string;
    ServiceControlPolicies: IResourceRef | IResourceRef[];
}
export declare class MasterAccountResource extends AccountResource {
    constructor(root: TemplateRoot, id: string, resource: IResource);
}
