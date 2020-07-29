package com.unewej.questengine.model;

import com.unewej.questengine.model.enumeration.TextRowType;
import com.unewej.questengine.payload.TextRowPayload;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "text_row")
public class TextRow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long index;
    @OneToMany(mappedBy = "row")
    private List<TextRowSegment> segments;
    @Column(nullable = false)
    private TextRowType type;
    private String borderColor;
    private String padding;
    private Boolean fullWidth;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="article_id", nullable=false)
    private Article article;

    public static TextRow fromPayload(TextRowPayload payload) {
        return TextRow.builder()
                .id(payload.getId())
                .index(payload.getIndex())
                .type(payload.getType())
                .borderColor(payload.getBorderColor())
                .padding(payload.getPadding())
                .fullWidth(payload.getFullWidth())
                .segments(payload.getSegments().stream().map(TextRowSegment::fromPayload).collect(Collectors.toList()))
                .build();
    }
}
