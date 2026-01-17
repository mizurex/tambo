// Jest manual mock for @tambo-ai/react used by registry component tests.
//
// Tests should cast the exported hooks to `jest.MockedFunction<typeof useTambo>`
// (etc) when they need to override behavior for a specific scenario.

import { jest } from "@jest/globals";
import type { Mock } from "jest-mock";
import { GenerationStage } from "../../../react-sdk/src/model/generate-component-response";

export { GenerationStage }; // Export the enum to be used in the tests

export const useTambo: Mock = jest.fn().mockReturnValue({
  thread: {
    messages: [],
    generationStage: GenerationStage.IDLE,
  },
});

export const useTamboThread: Mock = jest.fn().mockReturnValue({
  switchCurrentThread: jest.fn(),
  startNewThread: jest.fn(),
});

export const useTamboThreadList: Mock = jest.fn().mockReturnValue({
  data: { items: [] },
  isLoading: false,
  error: null,
  refetch: jest.fn(),
});
