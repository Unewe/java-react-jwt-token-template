package com.unewej.questengine.model;

import com.unewej.questengine.payload.ArticlePayload;
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
@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String imageUrl;
    private Boolean blocked;
    private Boolean accepted;
    @OneToMany(mappedBy = "article")
    private List<TextRow> textRows;

    public static Article fromPayload(ArticlePayload payload) {
        Article article = Article.builder()
                .id(payload.getId())
                .name(payload.getName())
                .description(payload.getDescription())
                .imageUrl(payload.getImageUrl())
                .textRows(payload.getTextRows().stream().map(TextRow::fromPayload).collect(Collectors.toList()))
                .build();
        article.getTextRows().forEach(textRow -> textRow.setArticle(article));
        return article;
    }
}
