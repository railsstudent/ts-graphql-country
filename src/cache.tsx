import { InMemoryCache } from "@apollo/client";
import { fleuncyVar } from "./reactive-vars";

const typePolicies = {
    Query: {
        fields: {
            fluency: {
                read(x: any, data: any) {
                    console.log('variables', data);
                    const result = fleuncyVar();
                    return result;
                }
            }
        }
    }
}

const cache = new InMemoryCache({
    typePolicies
});

export default cache;
