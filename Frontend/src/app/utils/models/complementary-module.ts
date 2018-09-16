import { Deserializable } from "./deserializable";
import { ComplementaryCours } from "./complementary-cours";

export class ComplementaryModule implements Deserializable{
    
    id:                         number;
    label:                      string;
    description:                string;
    complementary_courses:      ComplementaryCours[];

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

    constructor() {
    }
}