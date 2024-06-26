// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file annex/events/v1/event.proto (package annex.events.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { CaseExecution, Log, TestExecution } from "../../tests/v1/test_pb.js";

/**
 * @generated from message annex.events.v1.Event
 */
export class Event extends Message<Event> {
  /**
   * @generated from field: string event_id = 1;
   */
  eventId = "";

  /**
   * @generated from field: string test_execution_id = 2;
   */
  testExecutionId = "";

  /**
   * @generated from field: annex.events.v1.Event.Type type = 3;
   */
  type = Event_Type.UNSPECIFIED;

  /**
   * @generated from field: annex.events.v1.Event.Data data = 4;
   */
  data?: Event_Data;

  /**
   * @generated from field: google.protobuf.Timestamp create_time = 5;
   */
  createTime?: Timestamp;

  constructor(data?: PartialMessage<Event>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "annex.events.v1.Event";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "event_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "test_execution_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(Event_Type) },
    { no: 4, name: "data", kind: "message", T: Event_Data },
    { no: 5, name: "create_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event {
    return new Event().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event {
    return new Event().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event {
    return new Event().fromJsonString(jsonString, options);
  }

  static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean {
    return proto3.util.equals(Event, a, b);
  }
}

/**
 * @generated from enum annex.events.v1.Event.Type
 */
export enum Event_Type {
  /**
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TYPE_TEST_EXECUTION_SCHEDULED = 1;
   */
  TEST_EXECUTION_SCHEDULED = 1,

  /**
   * @generated from enum value: TYPE_TEST_EXECUTION_STARTED = 2;
   */
  TEST_EXECUTION_STARTED = 2,

  /**
   * @generated from enum value: TYPE_TEST_EXECUTION_FINISHED = 3;
   */
  TEST_EXECUTION_FINISHED = 3,

  /**
   * @generated from enum value: TYPE_CASE_EXECUTION_SCHEDULED = 4;
   */
  CASE_EXECUTION_SCHEDULED = 4,

  /**
   * @generated from enum value: TYPE_CASE_EXECUTION_STARTED = 5;
   */
  CASE_EXECUTION_STARTED = 5,

  /**
   * @generated from enum value: TYPE_CASE_EXECUTION_FINISHED = 6;
   */
  CASE_EXECUTION_FINISHED = 6,

  /**
   * @generated from enum value: TYPE_LOG_PUBLISHED = 7;
   */
  LOG_PUBLISHED = 7,
}
// Retrieve enum metadata with: proto3.getEnumType(Event_Type)
proto3.util.setEnumType(Event_Type, "annex.events.v1.Event.Type", [
  { no: 0, name: "TYPE_UNSPECIFIED" },
  { no: 1, name: "TYPE_TEST_EXECUTION_SCHEDULED" },
  { no: 2, name: "TYPE_TEST_EXECUTION_STARTED" },
  { no: 3, name: "TYPE_TEST_EXECUTION_FINISHED" },
  { no: 4, name: "TYPE_CASE_EXECUTION_SCHEDULED" },
  { no: 5, name: "TYPE_CASE_EXECUTION_STARTED" },
  { no: 6, name: "TYPE_CASE_EXECUTION_FINISHED" },
  { no: 7, name: "TYPE_LOG_PUBLISHED" },
]);

/**
 * @generated from message annex.events.v1.Event.Data
 */
export class Event_Data extends Message<Event_Data> {
  /**
   * @generated from field: annex.events.v1.Event.Data.Type type = 1;
   */
  type = Event_Data_Type.UNSPECIFIED;

  /**
   * @generated from oneof annex.events.v1.Event.Data.data
   */
  data: {
    /**
     * @generated from field: annex.tests.v1.TestExecution test_execution = 2;
     */
    value: TestExecution;
    case: "testExecution";
  } | {
    /**
     * @generated from field: annex.tests.v1.CaseExecution case_execution = 3;
     */
    value: CaseExecution;
    case: "caseExecution";
  } | {
    /**
     * @generated from field: annex.tests.v1.Log log = 4;
     */
    value: Log;
    case: "log";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Event_Data>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "annex.events.v1.Event.Data";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(Event_Data_Type) },
    { no: 2, name: "test_execution", kind: "message", T: TestExecution, oneof: "data" },
    { no: 3, name: "case_execution", kind: "message", T: CaseExecution, oneof: "data" },
    { no: 4, name: "log", kind: "message", T: Log, oneof: "data" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event_Data {
    return new Event_Data().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event_Data {
    return new Event_Data().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event_Data {
    return new Event_Data().fromJsonString(jsonString, options);
  }

  static equals(a: Event_Data | PlainMessage<Event_Data> | undefined, b: Event_Data | PlainMessage<Event_Data> | undefined): boolean {
    return proto3.util.equals(Event_Data, a, b);
  }
}

/**
 * @generated from enum annex.events.v1.Event.Data.Type
 */
export enum Event_Data_Type {
  /**
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TYPE_NONE = 1;
   */
  NONE = 1,

  /**
   * @generated from enum value: TYPE_TEST_EXECUTION = 2;
   */
  TEST_EXECUTION = 2,

  /**
   * @generated from enum value: TYPE_CASE_EXECUTION = 3;
   */
  CASE_EXECUTION = 3,

  /**
   * @generated from enum value: TYPE_LOG = 4;
   */
  LOG = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(Event_Data_Type)
proto3.util.setEnumType(Event_Data_Type, "annex.events.v1.Event.Data.Type", [
  { no: 0, name: "TYPE_UNSPECIFIED" },
  { no: 1, name: "TYPE_NONE" },
  { no: 2, name: "TYPE_TEST_EXECUTION" },
  { no: 3, name: "TYPE_CASE_EXECUTION" },
  { no: 4, name: "TYPE_LOG" },
]);

