import { HalRestClient } from "./hal-rest-client";

export interface IHalResourceConstructor<T extends IHalResource> {
  new (restClient: HalRestClient, uri ?: string): T;
}

export interface IHalResource {
  links: object;
  props: object;
  isLoaded: boolean;
  uri: string;

  fetch(force: boolean): Promise<IHalResource>;

  prop(name: string): any;

  link(name: string): IHalResource;
}