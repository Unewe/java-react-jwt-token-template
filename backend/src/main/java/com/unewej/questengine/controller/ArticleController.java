package com.unewej.questengine.controller;

import com.unewej.questengine.model.ArticleEntity;
import com.unewej.questengine.payload.Article;
import com.unewej.questengine.service.ArticleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/article")
public class ArticleController {

    ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    public ResponseEntity<ArticleEntity> getArticleById(Long id) {
        return ResponseEntity.ok(articleService.getById(id));
    }

    @PostMapping
    public ResponseEntity<?> saveArticle(@RequestBody Article payload) {
        articleService.save(ArticleEntity.fromPayload(payload));
        return ResponseEntity.ok().build();
    }
}
