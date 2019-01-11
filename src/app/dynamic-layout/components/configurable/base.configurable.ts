import {
  ConfigurableLayout,
  LayoutConfig
} from '../../state/page-layout.model';

export abstract class BaseConfigurableLayout<CHILDREN_CONFIG>
  implements ConfigurableLayout<CHILDREN_CONFIG> {
  protected pageId: string;
  protected editingMode = false;
  protected layoutConfig: LayoutConfig<CHILDREN_CONFIG>;

  /**
   * Initializes the basic properties of this layout
   * Should only be called once at the component initialization process
   */
  public initComponent(
    pageId: string,
    layoutConfig: LayoutConfig<CHILDREN_CONFIG>
  ): void {
    this.pageId = pageId;

    this.layoutConfig = layoutConfig;
    if (!this.layoutConfig.children) {
      this.layoutConfig.children = [];
      this.addChild();
    }
  }

  /**
   * Sets the current editing mode
   * Can be called anytime
   */
  public setEditingMode(editingMode: boolean): void {
    this.editingMode = editingMode;
  }

  protected abstract buildNewChildConfig(): CHILDREN_CONFIG;

  /**
   * Adds a new child to the array, requesting the initial child configuration
   */
  protected addChild() {
    this.layoutConfig.children.push({
      config: this.buildNewChildConfig(),
      component: {
        component: null
      }
    });
  }

  /**
   * Removes the child with the given object in the child array
   */
  protected removeChild(child) {
    this.layoutConfig.children.splice(
      this.layoutConfig.children.indexOf(child),
      1
    );
  }
}
