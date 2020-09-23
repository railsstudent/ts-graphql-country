import { InMemoryCache } from '@apollo/client';
import { fleuncyVar, FluencyLevel } from './reactive-vars';

const typePolicies = {
    Language: {
        fields: {
            fluency: {
                read(_: any, { variables }: any) {
                    const {
                        filter: { name = '' },
                    } = variables || {};
                    return (
                        fleuncyVar()[name as string] || FluencyLevel.DO_NOT_KNOW
                    );
                },
            },
        },
    },
};

const cache = new InMemoryCache({
    typePolicies,
});

export default cache;
