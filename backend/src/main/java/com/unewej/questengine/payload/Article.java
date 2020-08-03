package com.unewej.questengine.payload;

import lombok.Data;

import java.util.List;

@Data
public class Article {
    private Long id;
    private String name;
    private String description;
    private String imageUrl;
    private List<Container> containers;
}
