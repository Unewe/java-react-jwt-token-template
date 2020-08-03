package com.unewej.questengine.model;

import com.unewej.questengine.payload.Article;
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
@Entity(name = "article")
public class ArticleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String imageUrl;
    private Boolean blocked;
    private Boolean accepted;
    @OneToMany(mappedBy = "article")
    private List<ContainerEntity> containers;

    public static ArticleEntity fromPayload(Article payload) {
        ArticleEntity article = ArticleEntity.builder()
                .id(payload.getId())
                .name(payload.getName())
                .description(payload.getDescription())
                .imageUrl(payload.getImageUrl())
                .containers(payload.getContainers().stream().map(ContainerEntity::fromPayload).collect(Collectors.toList()))
                .build();
        article.getContainers().forEach(container -> container.setArticle(article));
        return article;
    }
}
