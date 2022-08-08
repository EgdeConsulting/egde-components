import React from 'react';

type Parameter = {
    name: string;
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
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
                {parameters.map(
                    ({ name, type, defaultValue, description }, index) => (
                        <tr key={`parameter${index}`}>
                            <td>{name}</td>
                            <td>
                                <code>{type}</code>
                            </td>
                            <td>{defaultValue}</td>
                            <td>{description}</td>
                        </tr>
                    ),
                )}
            </table>
            <br />
            <h4>Implementation:</h4>
        </div>
    );
};

export { DocsPageBodyUtilities };