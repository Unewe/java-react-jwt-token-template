package com.unewej.questengine.payload;

import com.unewej.questengine.model.TextRowSegment;
import com.unewej.questengine.model.enumeration.TextRowType;
import lombok.Data;

import java.util.List;

@Data
public class TextRowPayload {
    private Long id;
    private Long index;
    private List<TextRowSegmentPayload> segments;
    private TextRowType type;
    private String borderColor;
    private String padding;
    private Boolean fullWidth;
}
