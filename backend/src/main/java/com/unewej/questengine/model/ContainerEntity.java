package com.unewej.questengine.model;

import com.unewej.questengine.model.enumeration.ContainerType;
import com.unewej.questengine.payload.Container;
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
@Entity(name = "container")
public class ContainerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long index;
    private ContainerType containerType;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "article_id")
    private ArticleEntity article;
    @OneToMany(mappedBy = "container")
    private List<RowEntity> rows;

    public static ContainerEntity fromPayload(Container payload) {
        ContainerEntity containerEntity = ContainerEntity.builder()
                .id(payload.getId())
                .index(payload.getIndex())
                .containerType(payload.getContainerType())
                .rows(payload.getRows().stream().map(RowEntity::fromPayload).collect(Collectors.toList()))
                .build();
        containerEntity.rows.forEach(rowEntity -> rowEntity.setContainer(containerEntity));
        return containerEntity;
    }
}
