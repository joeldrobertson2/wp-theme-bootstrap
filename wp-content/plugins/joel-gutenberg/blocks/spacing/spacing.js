/* global wp */
import classNames from 'classnames';

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, CheckboxControl, RadioControl } = wp.components;

const spacingBlocks = [
  // 'core/buttons',
  // 'core/gallery',
  'core/image',
  'core/columns',
  'core/group',
  'core/cover',
];

const addSpacingAttributes = (settings, name) => {
  if (!spacingBlocks.includes(name)) {
    return settings;
  }

  const spacingAttributes = {
    spacing: {
      type: 'string',
      default: 'none',
    },
    topMargin: {
      type: 'boolean',
      default: false,
    },
    bottomMargin: {
      type: 'boolean',
      default: false,
    },
  };

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...spacingAttributes,
    },
  };
};

const addInspectorControls = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const {
      attributes: {
        topMargin, spacing, bottomMargin,
      },
      name,
      setAttributes,
    } = props;
    if (!spacingBlocks.includes(name)) {
      return <BlockEdit {...props} />;
    }

    // const className = classNames(
    //   { 'space--noTopMargin': topMargin },
    //   { 'space--noBottomMargin': bottomMargin },
    //   { 'space--small': spacing === 'small' },
    //   { 'space--medium': spacing === 'medium' },
    //   { 'space--large': spacing === 'large' },
    // );

    // const newProps = {
    //   ...props,
    //   className,
    // };

    // console.log(newProps);

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Spacing" initialOpen={false}>
            <RadioControl
              selected={spacing}
              options={[
                { label: 'None', value: 'none' },
                { label: 'Small', value: 'small' },
                { label: 'Medium', value: 'medium' },
                { label: 'Large', value: 'large' },
              ]}
              onChange={(spacing) => {
                setAttributes({ spacing });
              }}
            />
            <CheckboxControl
              label="Remove top margin"
              checked={topMargin}
              onChange={(topMargin) => {
                setAttributes({ topMargin });
              }}
            />
            <CheckboxControl
              label="Remove bottom margin"
              checked={bottomMargin}
              onChange={(bottomMargin) => {
                setAttributes({ bottomMargin });
              }}
            />
          </PanelBody>
        </InspectorControls>
        <BlockEdit {...props} />
      </Fragment>
    );
  };
}, 'addInspectorControls');

const addEditorClasses = createHigherOrderComponent((BlockListBlock) => {
  return (props) => {
    const {
      attributes: {
        topMargin, spacing, bottomMargin,
      },
      name,
    } = props;

    if (!spacingBlocks.includes(name)) {
      return <BlockListBlock {...props} />;
    }

    const spaceClasses = [
      { 'space--noTopMargin': topMargin },
      { 'space--noBottomMargin': bottomMargin },
      { 'space--small': spacing === 'small' },
      { 'space--medium': spacing === 'medium' },
      { 'space--large': spacing === 'large' },
    ];


    return <BlockListBlock {...props} className={classNames(spaceClasses)} />;
  };
}, 'addEditorClasses');

function saveSpacingClasses(extraProps, blockType, attributes) {
  if (!spacingBlocks.includes(blockType.name)) {
    return extraProps;
  }

  const { topMargin, spacing, bottomMargin } = attributes;

  const spaceClasses = [
    { 'space--noTopMargin': topMargin },
    { 'space--noBottomMargin': bottomMargin },
    { 'space--small': spacing === 'small' },
    { 'space--medium': spacing === 'medium' },
    { 'space--large': spacing === 'large' },
  ];

  return {
    ...extraProps,
    className: classNames(extraProps.className, spaceClasses),
  };
}

wp.hooks.addFilter(
  'editor.BlockListBlock',
  'jr-blocks/spacing',
  addEditorClasses,
);

wp.hooks.addFilter(
  'blocks.getSaveContent.extraProps',
  'jr-blocks/spacing',
  saveSpacingClasses,
);

wp.hooks.addFilter(
  'blocks.registerBlockType',
  'jr-blocks/spacing',
  addSpacingAttributes,
);

wp.hooks.addFilter(
  'editor.BlockEdit',
  'jr-blocks/spacing',
  addInspectorControls,
);
