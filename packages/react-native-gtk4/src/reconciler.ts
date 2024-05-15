import Reconciler, { HostConfig } from "react-reconciler"
import * as registry from "./registry.js"
import { DefaultEventPriority } from "react-reconciler/constants.js"
import { Container } from "./index.js"
import Widget from "./widget.js"

type ElementType = keyof typeof registry
type UpdatePayload = [string, string, any][]

const hostConfig: HostConfig<
  ElementType,
  Record<string, any>,
  Container,
  Widget,
  Widget,
  Widget,
  Widget,
  Widget,
  unknown,
  UpdatePayload,
  Set<Widget>,
  ReturnType<typeof setTimeout>,
  -1
> = {
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,
  isPrimaryRenderer: true,
  noTimeout: -1,
  createInstance(type, props, rootContainer) {
    const Element = registry[type]
    return new Element(rootContainer, props)
  },
  createTextInstance(text, rootContainer) {
    const Label = registry["Label"]
    return new Label(rootContainer, { label: text })
  },
  appendInitialChild(parentInstance, child) {
    parentInstance.appendChild(child)
  },
  finalizeInitialChildren() {
    return true
  },
  appendChild(parentInstance, child) {
    parentInstance.appendChild(child)
  },
  removeChild(parentInstance, child) {
    parentInstance.removeChild(child)
  },
  prepareUpdate(_instance, _type, oldProps, newProps) {
    return Object.keys(newProps).reduce((acc, propName) => {
      if (oldProps[propName] !== newProps[propName]) {
        acc.push([propName, newProps[propName], oldProps[propName]])
      }
      return acc
    }, [] as UpdatePayload)
  },
  commitMount(instance) {
    instance.commitMount()
  },
  commitUpdate(instance, updatePayload) {
    for (const [propName, newValue, oldValue] of updatePayload) {
      instance.set(propName, newValue, oldValue)
    }
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.set("label", newText, oldText)
  },
  shouldSetTextContent() {
    return false
  },
  getRootHostContext() {
    return null
  },
  getChildHostContext(parentHostContext) {
    return parentHostContext
  },
  getPublicInstance(instance) {
    return instance.node
  },
  prepareForCommit() {
    return null
  },
  resetAfterCommit() {
    return null
  },
  preparePortalMount() {},
  scheduleTimeout(fn, delay) {
    return setTimeout(fn, delay)
  },
  cancelTimeout(id) {
    clearTimeout(id)
  },
  getCurrentEventPriority() {
    return DefaultEventPriority
  },
  getInstanceFromNode() {
    return null
  },
  beforeActiveInstanceBlur() {},
  afterActiveInstanceBlur() {},
  prepareScopeUpdate() {},
  getInstanceFromScope() {
    return null
  },
  detachDeletedInstance() {},
  clearContainer() {},
  appendChildToContainer() {},
}

export default Reconciler(hostConfig)
