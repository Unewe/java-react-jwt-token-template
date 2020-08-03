package com.unewej.questengine.payload;

import com.unewej.questengine.model.enumeration.RowType;
import lombok.Data;

import java.util.List;

@Data
public class Row {
    private Long id;
    private Long index;
    private List<Segment> segments;
    private RowType rowType;
    private String borderColor;
    private String padding;
    private Boolean fullWidth;
}
