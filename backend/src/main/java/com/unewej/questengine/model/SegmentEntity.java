package com.unewej.questengine.model;

import com.unewej.questengine.model.enumeration.SegmentType;
import com.unewej.questengine.payload.Segment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "segment")
public class SegmentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long index;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="row_id", nullable=false)
    private RowEntity row;
    @Column(name = "segment_text", nullable = false)
    private String text;
    @Column(nullable = false)
    private SegmentType segmentType;
    private String fontSize;
    private String color;
    private String backgroundColor;
    private String href;

    public static SegmentEntity fromPayload(Segment payload) {
        return SegmentEntity.builder()
                .id(payload.getId())
                .index(payload.getIndex())
                .text(payload.getText())
                .segmentType(payload.getSegmentType())
                .fontSize(payload.getFontSize())
                .color(payload.getColor())
                .backgroundColor(payload.getBackgroundColor())
                .href(payload.getHref())
                .build();
    }
}
