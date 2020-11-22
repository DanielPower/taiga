interface ConcordEntity {
  (this: void, world: ConcordWorld): ConcordEntity;
  give(name: string, ...args: any): ConcordEntity;
  ensure(name: string): ConcordEntity;
  remove(name: string): ConcordEntity;
  assemble(assemblage: Function): ConcordEntity;
  destroy(): ConcordEntity;
  has(name: string): boolean;
  get(name: string): ConcordComponent;
  getComponents(): ConcordComponent[];
  inWorld(): boolean;
  getWorld(): ConcordWorld;
  serialize(): any;
  deserialize(data: any): ConcordEntity;
}

interface ConcordWorld {
  (this: void): ConcordWorld;
  addEntity(entity: ConcordEntity): ConcordWorld;
  removeEntity(entity: ConcordEntity): ConcordWorld;
  addSystem(system: ConcordSystem): ConcordWorld;
  addSystems(...args: ConcordSystem[]): ConcordWorld;
  hasSystem(system: ConcordSystem): boolean;
  getSystem(system: ConcordSystem): ConcordSystem;
  emit(functionName: string, ...args: any): ConcordWorld;
  clear(): ConcordWorld;
  getEntities(): ConcordEntity[];
  getSystems(): ConcordSystem[];
  serialize(): any;
  deserialize(data: any): ConcordWorld;
  hasName(): boolean;
  getName(): string;
  onEntityAdded(): void;
  onEntityRemoved(): void;
}

interface ConcordComponent {
  (this: void, name: string, populate?: Function): ConcordComponent;
  serialize(): any;
  deserialize(data: any): ConcordComponent;
  hasName(): boolean;
  getName(): boolean;
}

interface ConcordSystem {
  (this: void, filters: { [key: string]: Array<string> }): ConcordSystem;
  setEnabled(enable: boolean): ConcordSystem;
  isEnabled(): boolean;
  getWorld(): ConcordWorld;
  hasName(): boolean;
  getName(): boolean;
  init(world: ConcordWorld): void;
  onEnabled(): void;
  onDisabled(): void;
}

interface ConcordUtils {
  shallowCopy(original: {}, target: {}): {};
  loadNamespace(pathOrFiles: string | string[], namespace: {}): {};
}

declare module "*lib/concord" {
  export const component: ConcordComponent;
  export const system: ConcordSystem;
  export const world: ConcordWorld;
  export const entity: ConcordEntity;
  export const utils: ConcordUtils;
}
