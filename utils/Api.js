/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: MIT-0
 */

const SERVER_URL = "http://127.0.0.1:8080/";
const SERVER_REGION = "us-west-2";

export function createMeetingRequest(meetingName, attendeeName) {
  let url = encodeURI(
    SERVER_URL +
      "/join?" +
      `title=${meetingName}&name=${attendeeName}&region=${SERVER_REGION}`
  );

  return fetch(url, { method: "POST" }).then((j) => j.json());
}
