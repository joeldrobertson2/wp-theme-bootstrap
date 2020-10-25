/* global wp */

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.editor;
const { PanelBody, CheckboxControl } = wp.components;

function saveExtraContent(element, blockType, attributes) {
  if (blockType.name !== 'core/group' || !attributes.content) {
    return element;
  }

  return (
    <div className="wp-block-group-option-wrapper">
      {element}
      <p className="wp-block-group-option">logo</p>
    </div>
  );
}

function addContentAttributes(settings, name) {
  if (name !== 'core/group') {
    return settings;
  }
  const spacingAttributes = {
    content: {
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
}

const addInspectorControls = createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    const {
      attributes: {
        content,
      },
      name,
      setAttributes,
    } = props;
    if (name !== 'core/group') {
      return <BlockEdit {...props} />;
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Options" initialOpen={false}>
            <CheckboxControl
              label="Add extra content"
              checked={content}
              onChange={(content) => {
                setAttributes({ content });
              }}
            />
          </PanelBody>
        </InspectorControls>
        <BlockEdit {...props} />
      </Fragment>
    );
  };
}, 'addInspectorControls');

wp.hooks.addFilter(
  'blocks.getSaveElement',
  'jr/add-content',
  saveExtraContent,
);

wp.hooks.addFilter(
  'editor.BlockEdit',
  'jr/add-content',
  addInspectorControls,
);

wp.hooks.addFilter(
  'blocks.registerBlockType',
  'jr/add-content',
  addContentAttributes,
);
