package com.google.sps.data;

/** An item on a todo list. */
public final class RecordTask {
  private final String email;
  private final String state;
  private final String reason;

  public RecordTask(String email,String state,String reason) {
      this.email = email;
      this.state = state;
      this.reason = reason;
  }
}