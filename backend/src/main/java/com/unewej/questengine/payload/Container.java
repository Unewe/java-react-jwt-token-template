package com.unewej.questengine.payload;

import com.unewej.questengine.model.enumeration.ContainerType;
import lombok.Data;

import java.util.List;

@Data
public class Container {
    private Long id;
    private Long index;
    private ContainerType containerType;
    private List<Row> rows;
}
