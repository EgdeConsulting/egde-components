/* eslint-disable */

import { MutableRefObject, ReactElement } from 'react';

type Direction = 'row' | 'column';

enum IconTestID {
    AlertWarning = 'alertWarningIcon',
    AlertInfo = 'alertInfoIcon',
    AlertError = 'alertErrorIcon',
    AlertSuccess = 'alertSuccessIcon',
    AlertDialog = 'alertDialogIcon',
    CardTitle = 'cardTitleIcon',
    CardAction = 'cardActionIcon',
    Modal = 'modalIcon',
}

type IconType = {
    width?: number | string;
    height?: number | string;
    viewBox?: string;
    fill?: string;
    xmlns?: string;
    backgroundColor?: string;
};

enum ModalIconType {
    Check = 'check',
    Exclamation = 'exclamation',
}

enum AlertDialogIconType {
    Warning = 'warning',
}

type ResponsiveStyleValue = string | (string | number)[];

interface BaseInputProps extends InputProps {
    children: JSX.Element[] | JSX.Element;
    isGroup?: boolean;
}

type InputProps = {
    label?: string;
    labelTextMargin?: ResponsiveStyleValue;
    invalidText?: string;
    captionText?: string;
    captionTextMargin?: string;
    margin?: ResponsiveStyleValue;
    padding?: ResponsiveStyleValue;
    width?: ResponsiveStyleValue;
    minWidth?: ResponsiveStyleValue;
    maxWidth?: ResponsiveStyleValue;
    variant?: string;
};
interface InputComponentProps extends InputProps {
    isDisabled?: boolean;
    autoFocus?: boolean;
}
interface TextInputProps extends InputComponentProps {
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    characterLimit?: number;
    textAlign?: 'right' | 'center';
}

interface NumberInputProps extends InputComponentProps {
    placeholder?: string;
    allowNegative?: boolean;
    value: string;
    onChange: (value: string) => void;
    maxValue?: string;
    maxValueLength?: number;
    isCurrency?: boolean;
    currencySpacer?: string;
    textAlign?: 'right' | 'center';
}

type CardProps = {
    title: string;
    body: string;
    textColors?: string;
    titleTextColor?: string;
    bodyTextColor?: string;
    titleTextSize?: string;
    bodyTextSize?: string;
    onClick?: () => void;
    titleIcon?: ReactElement;
    actionIcon?: ReactElement;
    cardHeight?: ResponsiveStyleValue;
    cardWidth?: ResponsiveStyleValue;
};

type ModalProps = {
    isModalOpen: boolean;
    isCentered: boolean;
    iconVariant?: ModalIconType;
    title: string;
    subtitle?: string;
    children?: JSX.Element[] | JSX.Element;
    buttons: ModalButtons;
    hasCloseButton?: boolean;
    onClose: () => void;
    errorMessage?: string;
    width?: ResponsiveStyleValue;
};

type ModalButtons = {
    primary: ModalButton;
    secondary: ModalButton;
    alignment: 'left' | 'right';
};

type ModalButton = {
    label: string;
    variant: string;
    onClick?: () => void;
};

interface RadioProps extends InputComponentProps {
    direction?: Direction;
    options: string[];
    value: number;
    onChange: (value: number) => void;
}

interface CheckboxProps extends InputComponentProps {
    direction?: Direction;
    options: string[];
    value: number[];
    onChange: (value: number[]) => void;
}

type AccordionProps = {
    allowMultiple?: boolean;
    items: AccordionItem[];
};

enum AccordionBadgeEnum {
    OK = 'Alle obligatoriske felt er fylt ut',
    InProgress = 'Under arbeid',
}

type AccordionItem = {
    title: string;
    content: JSX.Element[] | JSX.Element;
    badge?: AccordionBadgeEnum;
};

type TabProps = {
    tabs: Tab[];
    centerTabs?: boolean;
};

type Tab = {
    title: string;
    children: JSX.Element[] | JSX.Element;
};

type StepperProps = {
    activeStep: number;
    setActiveStep: (value: number) => void;
    stepsContent: StepContent[];
    buttonTexts: StepperButtonTexts;
    finalStep: finalStep;
    buttonAlignment?: 'left' | 'center' | 'right';
    buttonMargin?: ResponsiveStyleValue;
    clickableSteps?: boolean;
    completedSteps?: number[];
    onFinalStep: () => void;
    onFinalize: () => void;
    isCompleteButtonDisabled?: boolean;
};

type StepContent = {
    label: string;
    children: JSX.Element[] | JSX.Element;
};
type StepperButtonTexts = {
    previous: string;
    next: string;
    complete: string;
};
type finalStep = {
    finalText: string;
    finalButtonText: string;
};

type AlertProps = {
    status?: 'warning' | 'info' | 'success' | 'error';
    description: string;
    onClose?: () => void;
    hasNoCloseButton?: boolean;
    linkText?: string;
    linkHref?: string;
    route?: string;
};

type AlertDialogProps = {
    iconVariant?: AlertDialogIconType;
    heading: string;
    text: string;
    isOpen: boolean;
    cancelRef: MutableRefObject<undefined>;
    onClose: () => void;
    buttons: AlertDialogButton[];
};

type AlertDialogButton = {
    label: string;
    variant: string;
    onClick: () => void;
};

interface BaseSelectProps extends InputComponentProps {
    placeholder?: string;
    options: SelectOption[];
    filterText?: string;
}

interface SelectProps extends BaseSelectProps {
    onChange: (value: SelectOption) => void;
    value?: SelectOption;
}

interface MultiSelectProps extends BaseSelectProps {
    submitText?: string;
    cancelText?: string;
    onChange: (value: SelectOption[]) => void;
    value: SelectOption[];
}

type SelectOption = {
    label: string;
    value: number;
};

interface DatePickerProps extends InputComponentProps {
    placeholder?: string;
    onChange: (value: Date) => void;
    value?: Date;
    maxDate?: Date;
    minDate?: Date;
    shouldCloseOnSelect?: boolean;
}
interface RichTextAreaProps extends TextInputProps {
    toolbarOptions?: {
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        unorderedList?: boolean;
        strikeThrough?: boolean;
        subscript?: boolean;
        superscript?: boolean;
        fontFamily?: boolean;
        fontSize?: boolean;
        textColor?: boolean;
        backgroundColor?: boolean;
        inlineClass?: boolean;
        inlineStyle?: boolean;
        clearFormatting?: boolean;
        alignLeft?: boolean;
        alignCenter?: boolean;
        formatOLSimple?: boolean;
        alignRight?: boolean;
        alignJustify?: boolean;
        formatOL?: boolean;
        formatUL?: boolean;
        paragraphFormat?: boolean;
        paragraphStyle?: boolean;
        lineHeight?: boolean;
        outdent?: boolean;
        indent?: boolean;
        quote?: boolean;
        insertLink?: boolean;
        insertImage?: boolean;
        insertVideo?: boolean;
        insertTable?: boolean;
        emoticons?: boolean;
        fontAwesome?: boolean;
        specialCharacters?: boolean;
        embedly?: boolean;
        insertFile?: boolean;
        insertHR?: boolean;
        undo?: boolean;
        redo?: boolean;
        fullscreen?: boolean;
        print?: boolean;
        getPDF?: boolean;
        spellChecker?: boolean;
        selectAll?: boolean;
        html?: boolean;
        help?: boolean;
    };
}

interface FileUploadProps extends InputProps {
    uploadLabel?: string;
    dropLabel?: string;
    maxFileSizeLabel?: string;
    maxUploadSizeLabel?: string;
    maxFileSize: number;
    maxUploadSize: number;
    disabled?: boolean;
    showIcon?: boolean;
    size?: string;
    variant?: string;
}

export type {
    BaseInputProps,
    TextInputProps,
    NumberInputProps,
    CardProps,
    ModalProps,
    ModalButtons,
    RadioProps,
    AccordionProps,
    AccordionItem,
    CheckboxProps,
    TabProps,
    StepperProps,
    AlertProps,
    AlertDialogProps,
    SelectProps,
    MultiSelectProps,
    SelectOption,
    AlertDialogButton,
    DatePickerProps,
    RichTextAreaProps,
    FileUploadProps,
    IconType,
};

export { IconTestID, AlertDialogIconType, ModalIconType, AccordionBadgeEnum };
