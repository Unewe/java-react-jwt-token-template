package com.unewej.questengine.model;

import com.unewej.questengine.model.enumeration.SegmentType;
import com.unewej.questengine.payload.TextRowSegmentPayload;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "text_row_segment")
public class TextRowSegment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long index;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="text_row_id", nullable=false)
    private TextRow row;
    @Column(name = "segment_text", nullable = false)
    private String text;
    @Column(nullable = false)
    private SegmentType type;
    private String fontSize;
    private String color;
    private String backgroundColor;
    private String href;

    public static TextRowSegment fromPayload(TextRowSegmentPayload payload) {
        return TextRowSegment.builder()
                .id(payload.getId())
                .index(payload.getIndex())
                .text(payload.getText())
                .type(payload.getType())
                .fontSize(payload.getFontSize())
                .color(payload.getColor())
                .backgroundColor(payload.getBackgroundColor())
                .href(payload.getHref())
                .build();
    }
}
