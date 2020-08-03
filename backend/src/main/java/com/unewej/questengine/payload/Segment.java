package com.unewej.questengine.payload;

import com.unewej.questengine.model.enumeration.SegmentType;
import lombok.Data;

@Data
public class Segment {
    private Long id;
    private Long index;
    private String text;
    private SegmentType segmentType;
    private String fontSize;
    private String color;
    private String backgroundColor;
    private Boolean newLine;
    private String href;
}
