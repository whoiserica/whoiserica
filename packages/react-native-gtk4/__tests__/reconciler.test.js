import { Container } from "../src/container.js"
import { DefaultEventPriority } from "react-reconciler/constants.js"

jest.mock("../src/container.js")

describe("Reconciler", () => {
  describe("host config", () => {
    let container
    let hostConfig
    let ReactReconciler
    let Label
    let AbstractWidget
    let createWidget

    beforeEach(() => {
      jest.doMock("../src/generated/widgets/Label.js")
      jest.doMock("../src/abstract/widget.js")
      Label = require("../src/generated/widgets/Label.js").default
      AbstractWidget = require("../src/abstract/widget.js").default

      jest.doMock("../src/generated/widgets.js", () => ({
        __esModule: true,
        Label,
        AbstractWidget,
      }))

      jest.doMock("react-reconciler")
      ReactReconciler = require("react-reconciler")
      createWidget = require("../src/test-support/utils.js").createMockWidget
      require("../src/reconciler.js")

      Container.mockImplementation(() =>
        Object.assign(Object.create(Container.prototype), {
          children: [],
          context: {},
        })
      )

      container = new Container()
      hostConfig = ReactReconciler.mock.calls[0][0]
    })

    describe("defaults", () => {
      test("should have the correct defaults", () => {
        expect(hostConfig).toMatchObject({
          supportsMutation: true,
          supportsPersistence: false,
          supportsMicrotasks: true,
          supportsHydration: false,
          isPrimaryRenderer: true,
          noTimeout: -1,
          createTextInstance: expect.any(Function),
          appendInitialChild: expect.any(Function),
          finalizeInitialChildren: expect.any(Function),
          appendChild: expect.any(Function),
          removeChild: expect.any(Function),
          insertBefore: expect.any(Function),
          removeChildFromContainer: expect.any(Function),
          prepareUpdate: expect.any(Function),
          commitMount: expect.any(Function),
          commitUpdate: expect.any(Function),
          commitTextUpdate: expect.any(Function),
          shouldSetTextContent: expect.any(Function),
          getRootHostContext: expect.any(Function),
          getChildHostContext: expect.any(Function),
          getPublicInstance: expect.any(Function),
          prepareForCommit: expect.any(Function),
          resetAfterCommit: expect.any(Function),
          preparePortalMount: expect.any(Function),
          scheduleTimeout: expect.any(Function),
          cancelTimeout: expect.any(Function),
          getCurrentEventPriority: expect.any(Function),
          getInstanceFromNode: expect.any(Function),
          beforeActiveInstanceBlur: expect.any(Function),
          afterActiveInstanceBlur: expect.any(Function),
          prepareScopeUpdate: expect.any(Function),
          getInstanceFromScope: expect.any(Function),
          detachDeletedInstance: expect.any(Function),
          clearContainer: expect.any(Function),
          appendChildToContainer: expect.any(Function),
          insertInContainerBefore: expect.any(Function),
          scheduleMicrotask: expect.any(Function),
        })
      })
    })

    describe("createInstance", () => {
      test("should create a widget", () => {
        const props = { some: "Prop" }
        hostConfig.createInstance("AbstractWidget", props, container)
        expect(AbstractWidget).toHaveBeenCalledWith(props, container.context)
      })

      test("should remove undefined props", () => {
        const props = { some: "Prop", undefined: undefined }

        hostConfig.createInstance("AbstractWidget", props, container)

        expect(AbstractWidget).toHaveBeenCalledWith(
          { some: "Prop" },
          container.context
        )
      })
    })

    describe("createTextInstance", () => {
      test("should create a label", () => {
        const text = "Some text"
        hostConfig.createTextInstance(text, container)
        expect(Label).toHaveBeenCalledWith({ label: text }, container.context)
      })
    })

    describe("appendInitialChild", () => {
      test("should append a child", () => {
        const parent = createWidget()
        const child = createWidget()

        hostConfig.appendInitialChild(parent, child)

        expect(parent.appendChild).toHaveBeenCalledWith(child)
      })
    })

    describe("finalizeInitialChildren", () => {
      test("should return true", () => {
        expect(hostConfig.finalizeInitialChildren()).toBe(true)
      })
    })

    describe("appendChild", () => {
      test("should append a child", () => {
        const parent = createWidget()
        const child = createWidget()

        hostConfig.appendChild(parent, child)

        expect(parent.appendChild).toHaveBeenCalledWith(child)
      })
    })

    describe("removeChild", () => {
      test("should remove a child", () => {
        const parent = createWidget()
        const child = createWidget()

        hostConfig.removeChild(parent, child)

        expect(parent.removeChild).toHaveBeenCalledWith(child)
      })
    })

    describe("insertBefore", () => {
      test("should insert a child", () => {
        const parent = createWidget()
        const child = createWidget()
        const beforeChild = createWidget()

        hostConfig.insertBefore(parent, child, beforeChild)

        expect(parent.insertBefore).toHaveBeenCalledWith(child, beforeChild)
      })
    })

    describe("removeChildFromContainer", () => {
      test("should remove a child", () => {
        const parent = createWidget()
        const child = createWidget()

        hostConfig.removeChildFromContainer(parent, child)

        expect(parent.removeChild).toHaveBeenCalledWith(child)
      })
    })

    describe("prepareUpdate", () => {
      test("should return a payload with the updates to apply", () => {
        const oldProps = { old: "Prop" }
        const newProps = { ...oldProps, new: "Prop" }

        const payload = hostConfig.prepareUpdate(
          container,
          "AbstractWidget",
          oldProps,
          newProps
        )

        expect(payload).toEqual([["new", "Prop"]])
      })
    })

    describe("commitMount", () => {
      test("should call commitMount on the widget", () => {
        const widget = createWidget()
        hostConfig.commitMount(widget)
        expect(widget.commitMount).toHaveBeenCalled()
      })
    })

    describe("commitUpdate", () => {
      test("should set the props on the widget", () => {
        const widget = createWidget()

        const payload = [
          ["some", "prop"],
          ["another", "prop"],
        ]

        hostConfig.commitUpdate(widget, payload)

        for (const [prop, value] of payload) {
          expect(widget.set).toHaveBeenCalledWith(prop, value)
        }
      })
    })

    describe("commitTextUpdate", () => {
      test("should set the text on the label", () => {
        const label = createWidget()
        const text = "Some text"

        hostConfig.commitTextUpdate(label, null, text)

        expect(label.set).toHaveBeenCalledWith("label", text)
      })
    })

    describe("shouldSetTextContent", () => {
      test("should return false", () => {
        expect(hostConfig.shouldSetTextContent()).toBe(false)
      })
    })

    describe("getRootHostContext", () => {
      test("should return null", () => {
        expect(hostConfig.getRootHostContext()).toBe(null)
      })
    })

    describe("getChildHostContext", () => {
      test("should return the parent context", () => {
        const parentContext = {}

        expect(hostConfig.getChildHostContext(parentContext)).toBe(
          parentContext
        )
      })
    })

    describe("getPublicInstance", () => {
      test("should return the widget node", () => {
        const widget = createWidget()
        expect(hostConfig.getPublicInstance(widget)).toBe(widget.node)
      })
    })

    describe("prepareForCommit", () => {
      test("should return null", () => {
        expect(hostConfig.prepareForCommit()).toBe(null)
      })
    })

    describe("resetAfterCommit", () => {
      test("should return null", () => {
        expect(hostConfig.resetAfterCommit()).toBe(null)
      })
    })

    describe("scheduleTimeout", () => {
      test("should call setTimeout", () => {
        jest.useFakeTimers()
        jest.spyOn(global, "setTimeout")

        const callback = jest.fn()
        const timeout = 1000

        hostConfig.scheduleTimeout(callback, timeout)

        expect(setTimeout).toHaveBeenCalledWith(callback, timeout)
      })
    })

    describe("cancelTimeout", () => {
      test("should call clearTimeout", () => {
        jest.useFakeTimers()
        jest.spyOn(global, "clearTimeout")

        const timeout = 1000

        hostConfig.cancelTimeout(timeout)

        expect(clearTimeout).toHaveBeenCalledWith(timeout)
      })
    })

    describe("getCurrentEventPriority", () => {
      test("should return DefaultEventPriority", () => {
        expect(hostConfig.getCurrentEventPriority()).toBe(DefaultEventPriority)
      })
    })

    describe("getInstanceFromNode", () => {
      test("should return null", () => {
        expect(hostConfig.getInstanceFromNode()).toBe(null)
      })
    })

    describe("getInstanceFromScope", () => {
      test("should return null", () => {
        expect(hostConfig.getInstanceFromScope()).toBe(null)
      })
    })

    describe("clearContainer", () => {
      test("should remove all children from the container", () => {
        container.children = [createWidget(), createWidget(), createWidget()]

        hostConfig.clearContainer(container)

        for (const child of container.children) {
          expect(container.removeChild).toHaveBeenCalledWith(child)
        }
      })
    })

    describe("appendChildToContainer", () => {
      test("should append a child to the container", () => {
        const child = createWidget()
        hostConfig.appendChildToContainer(container, child)
        expect(container.appendChild).toHaveBeenCalledWith(child)
      })
    })

    describe("insertInContainerBefore", () => {
      test("should insert a child in the container", () => {
        const child = createWidget()
        const beforeChild = createWidget()

        hostConfig.insertInContainerBefore(container, child, beforeChild)

        expect(container.insertBefore).toHaveBeenCalledWith(child, beforeChild)
      })
    })

    describe("scheduleMicrotask", () => {
      test("should call queueMicrotask", () => {
        jest.useFakeTimers()
        jest.spyOn(global, "queueMicrotask")

        const callback = jest.fn()

        hostConfig.scheduleMicrotask(callback)

        expect(queueMicrotask).toHaveBeenCalledWith(callback)
      })
    })
  })
})
