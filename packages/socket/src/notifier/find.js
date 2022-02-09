// @flow

import {hasIn} from "@betty-blocks/utils-composite";

import type {Notifier} from "./types";

const find = (notifiers: Array<Notifier<any, any>>, key: string, value: any) =>
  // $FlowFixMe: flow is having some troubles to match hasIn signature (curry)
  notifiers.find(hasIn([key], value));

export default find;
