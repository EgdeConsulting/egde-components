import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	ReactElement,
} from 'react';

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

enum ModalIconType {
	Check = 'check',
	Exclamation = 'exclamation',
}

enum AlertStatus {
	Warning = 'warning',
	Info = 'info',
	Error = 'error',
	Success = 'success',
}
enum AlertDialogIconType {
	Warning = 'warning',
}

type PageContainerProps = {
	title: string;
	titleAlignment?: 'left' | 'right' | 'center';
	titleTextColor?: string;
	subtitle?: string;
	subtitleAlignment?: 'left' | 'right' | 'center';
	subtitleTextColor?: string;
	children: JSX.Element[] | JSX.Element;
	containerPadding?: string | (string | number)[];
	containerMargin?: string | (string | number)[];
	containerSideMargins?: string | (string | number)[];
	contentPadding?: string | (string | number)[];
	contentMargin?: string | (string | number)[];
	subtitlePadding?: string | (string | number)[];
	titlePadding?: string | (string | number)[];
	titleMargin?: string | (string | number)[];
	borderColor?: string;
	borderWidth?: string | (string | number)[];
	contentBorderColor?: string;
	contentBorderWidth?: string;
	titleBadge?: { badgeColor: string; textColor: string; label: string };
	backgroundColor?: string;
	contentColor?: string;
	titlesColor?: string;
	height?: string | (string | number)[];
	width?: string | (string | number)[];
	containerMinWidth?: string | (string | number)[];
	containerMaxWidth?: string | (string | number)[];
	shouldContentFillContainer?: boolean;
	/** Use a single or array of 'ch' values, such as '60ch' or ['50ch', '60ch', '80ch'] for responsive breakpoints */
	containerSize?: string | string[];
};

interface BaseInputProps extends InputProps {
	children: JSX.Element[] | JSX.Element;
}

type InputProps = {
	label?: string;
	labelTextMargin?: string;
	invalidText?: string;
	captionText?: string;
	captionTextMargin?: string;
	margin?: string;
	padding?: string;
	width?: string;
	minWidth?: string;
	maxWidth?: string;
};
interface InputComponentProps extends InputProps {
	isDisabled?: boolean;
	backgroundColor?: string;
	autoFocus?: boolean;
}
interface TextInputProps extends InputComponentProps {
	placeholder?: string;
	value: string;
	onChange: Dispatch<SetStateAction<string>>;
	characterLimit?: number;
	textAlign?: 'right' | 'center';
}

interface NumberInputProps extends InputComponentProps {
	placeholder?: string;
	allowNegative?: boolean;
	value: string;
	onChange: Dispatch<SetStateAction<string>>;
	maxValue?: string;
	maxValueLength?: number;
	isCurrency?: boolean;
	currencySpacer?: string;
	textAlign?: 'right' | 'center';
}

type CardProps = {
	title: string;
	body: string;
	onClick?: () => void;
	titleIcon?: ReactElement;
	actionIcon?: ReactElement;
	cardHeight?: string;
	cardWidth?: string;
	titleSize?: string;
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
	width?: string;
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
	onChange: Dispatch<SetStateAction<number>>;
}

interface CheckboxProps extends InputComponentProps {
	direction?: Direction;
	options: string[];
	value: number[];
	onChange: Dispatch<SetStateAction<number[]>>;
}

type AccordionProps = {
	allowMultiple?: boolean;
	items: AccordionItem[];
};

type AccordionItem = {
	title: string;
	content: JSX.Element[] | JSX.Element;
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
	setActiveStep: Dispatch<SetStateAction<number>>;
	stepsContent: StepContent[];
	buttonTexts: StepperButtonTexts;
	finalStep: finalStep;
	buttonAlignment?: 'left' | 'center' | 'right';
	buttonMargin?: string;
	clickableSteps?: boolean;
	completedSteps?: number[];
	onFinalStep: () => void;
	onFinalize: () => void;
	isCompleteButtonDisabled?: boolean;
	buttonCaption?: { text: string; color: string };
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
	status: AlertStatus;
	description: string;
	onClose: () => void;
	linkText?: string;
	linkHref?: string;
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
	onChange: Dispatch<SetStateAction<SelectOption | undefined>>;
	value?: SelectOption;
}

interface MultiSelectProps extends BaseSelectProps {
	submitText?: string;
	cancelText?: string;
	onChange: Dispatch<SetStateAction<SelectOption[]>>;
	value: SelectOption[];
}

type SelectOption = {
	label: string;
	value: number;
};

interface DatePickerProps extends InputComponentProps {
	placeholder?: string;
	onChange: React.Dispatch<React.SetStateAction<Date | undefined>>;
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
	PageContainerProps,
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
};

export { IconTestID, AlertStatus, AlertDialogIconType, ModalIconType };
