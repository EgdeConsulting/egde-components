import { extendTheme } from '@chakra-ui/react';
import { colors, fonts } from './Theme';

import {
    Text,
    Heading,
    Button,
    IconButton,
    Card,
    Tabs,
    Checkbox,
    Radio,
    Steps,
    Input,
    Textarea,
    Table,
    FileInput,
} from './Components';

const overrides = {
    colors,
    fonts,
    components: {
        Text,
        Heading,
        Button,
        IconButton,
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
