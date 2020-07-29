package com.unewej.questengine.payload;

import com.unewej.questengine.model.enumeration.SegmentType;
import lombok.Data;

@Data
public class TextRowSegmentPayload {
    private Long id;
    private Long index;
    private String text;
    private SegmentType type;
    private String fontSize;
    private String color;
    private String backgroundColor;
    private String href;
}
