package com.unewej.questengine.model;

import com.unewej.questengine.model.enumeration.RowType;
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
@Entity(name = "row")
public class RowEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Long index;
    @Column(nullable = false)
    private RowType rowType;
    private String imageUrl;
    private String imageWidth;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name="container_id", nullable=false)
    private ContainerEntity container;
    @OneToMany(mappedBy = "row")
    private List<SegmentEntity> segments;

    public static RowEntity fromPayload(com.unewej.questengine.payload.Row payload) {
        RowEntity rowEntity = RowEntity.builder()
                .id(payload.getId())
                .index(payload.getIndex())
                .rowType(payload.getRowType())
                .segments(payload.getSegments().stream().map(SegmentEntity::fromPayload).collect(Collectors.toList()))
                .build();
        rowEntity.getSegments().forEach(segmentEntity -> segmentEntity.setRow(rowEntity));
        return rowEntity;
    }
}
