import {
  Injectable,
  ComponentFactoryResolver,
  Type,
  ComponentFactory
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentResolverService {
  constructor(private componentResolverFactory: ComponentFactoryResolver) {}

  getComponentFactory(componentName: string): ComponentFactory<any> {
    const factories = Array.from(
      this.componentResolverFactory['_factories'].keys()
    );
    const factoryClass = <Type<any>>(
      factories.find((x: any) => x.name === componentName)
    );

    return this.componentResolverFactory.resolveComponentFactory(factoryClass);
  }

  isComponentConfigurable(componentName: string) {
    return this.getComponentFactory(componentName).selector.startsWith(
      'dl-configurable'
    );
  }
}
