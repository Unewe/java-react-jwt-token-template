package com.unewej.questengine.payload;

import lombok.Data;

import javax.validation.constraints.*;

@Data
public class SignUpRequest {
    @NotNull
    @Size(min = 4, max = 40)
    private String name;

    @NotNull
    @Size(min = 3, max = 15)
    private String username;

    @NotNull
    @Email
    private String email;

    @NotNull
    @Size(min = 6, max = 20)
    private String password;
}