package com.unewej.questengine.exception;

public abstract class CircleException extends Exception {
    public CircleException() {
        super();
    }

    public CircleException(String message) {
        super(message);
    }

    public CircleException(String message, Throwable cause) {
        super(message, cause);
    }

    public CircleException(Throwable cause) {
        super(cause);
    }
}
