//tried to make a custom yup validation but it didn't work
import { StringSchema } from 'yup/lib/string';

declare module 'yup' {
    class StringSchema {
        firstLetterUpperCase(): StringSchema;
    }
}