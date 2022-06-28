import { extendTheme } from '@chakra-ui/react';

import { colors, fonts } from './Theme';

import {
    TextStyles as Text,
    HeadingStyles as Heading,
    ButtonStyles as Button,
    CardStyles as Card,
    TabStyles as Tabs,
    CheckboxStyles as Checkbox,
    RadioStyles as Radio,
    StepsStyles as Steps,
    // DatePickerStyles as DatePicker,
    InputStyles as Input,
    TextareaStyles as Textarea,
    TableStyles as Table,
    FileInputStyles as FileInput,
} from './Components';

const overrides = {
    colors,
    fonts,
    components: {
        Text,
        Heading,
        Button,
        Card,
        Tabs,
        Checkbox,
        Radio,
        Steps,
        // DatePicker,
        Input,
        Textarea,
        Table,
        FileInput,
    },
};

const styles = extendTheme(overrides);

export { styles };
