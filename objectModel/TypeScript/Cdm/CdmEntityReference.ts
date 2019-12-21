import {
    CdmConstantEntityDefinition,
    CdmCorpusContext,
    CdmEntityDefinition,
    CdmObjectReferenceBase,
    cdmObjectType,
    resolveOptions,
    VisitCallback
} from '../internal';

export class CdmEntityReference extends CdmObjectReferenceBase {
    public static get objectType(): cdmObjectType {
        return cdmObjectType.entityRef;
    }

    constructor(
        ctx: CdmCorpusContext, entityRef: string | CdmEntityDefinition | CdmConstantEntityDefinition, simpleReference: boolean) {
        super(ctx, entityRef, simpleReference);
        // let bodyCode = () =>
        {
            this.objectType = cdmObjectType.entityRef;
        }
        // return p.measure(bodyCode);
    }

    public getObjectType(): cdmObjectType {
        // let bodyCode = () =>
        {
            return cdmObjectType.entityRef;
        }
        // return p.measure(bodyCode);
    }

    /**
     * @internal
     */
    public copyRefObject(resOpt: resolveOptions, refTo: string | CdmEntityDefinition | CdmConstantEntityDefinition, simpleReference: boolean, host?: CdmObjectReferenceBase): CdmObjectReferenceBase {
        // let bodyCode = () =>
        {
            if (!host) {
                return new CdmEntityReference(this.ctx, refTo, simpleReference);
            } else {
                return host.copyToHost(this.ctx, refTo, simpleReference);
            }
        }
        // return p.measure(bodyCode);
    }

    /**
     * @internal
     */
    public visitRef(pathFrom: string, preChildren: VisitCallback, postChildren: VisitCallback): boolean {
        // let bodyCode = () =>
        {
            return false;
        }
        // return p.measure(bodyCode);
    }
}