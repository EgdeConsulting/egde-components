import React from 'react';
import { ArgsTable } from '@storybook/addon-docs';
import { DocsPageHeader } from '@egde/library';

type Parameter = {
    name: string;
    required: boolean;
    type: string;
    defaultValue: string;
    description: string;
};

interface DocsPageBodyProps {
    kindDescription: 'global function' | 'local function';
    returnDescription: string;
    parameters: Parameter[];
}

const DocsPageBodyUtilities = (props: DocsPageBodyProps) => {
    const { kindDescription, returnDescription, parameters } = props;

    return (
        <div className="docsPage">
            <br />
            <p>
                <strong>Kind: </strong>
                {kindDescription}
            </p>
            <p>
                <strong>Returns: </strong>
                <code>{returnDescription}</code>
            </p>
            {parameters.length > 0 && (
                <div>
                    {/*To be able to use the default doc-blocks table styling 
                    in a reliable way, they (CSS-classes) first have to be 
                    loaded to the DOM. The only way I found to achieve this is 
                    to load a hidden ArgsTable.*/}
                    <div style={{ display: 'none' }}>
                        <ArgsTable of={DocsPageHeader} />
                    </div>
                    <table className="docblock-argstable css-tm6i3o">
                        <thead className="docblock-argstable-head">
                            <tr>
                                <th>Parameter Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody className="docblock-argstable-body">
                            {parameters.map(
                                (
                                    {
                                        name,
                                        required,
                                        type,
                                        defaultValue,
                                        description,
                                    },
                                    index,
                                ) => (
                                    <tr key={`parameter${index}`}>
                                        <td>
                                            <span className="css-in3yi3">
                                                {name}
                                            </span>
                                            {required && (
                                                <span
                                                    title="Required"
                                                    className="css-1ywjlcj"
                                                >
                                                    *
                                                </span>
                                            )}
                                        </td>
                                        <td>
                                            <code>{type}</code>
                                        </td>
                                        <td>
                                            {defaultValue.length > 0
                                                ? defaultValue
                                                : '-'}
                                        </td>
                                        <td>{description}</td>
                                    </tr>
                                ),
                            )}
                        </tbody>
                    </table>
                </div>
            )}
            <br />
            <h4>Implementation:</h4>
        </div>
    );
};

export { DocsPageBodyUtilities };
