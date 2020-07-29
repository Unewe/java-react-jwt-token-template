package com.unewej.questengine.service;

import com.unewej.questengine.model.Article;
import com.unewej.questengine.repository.ArticleRepository;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {

    ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public Article getById(Long id) {
        return articleRepository.getOne(id);
    }

    public void save(Article article) {
        articleRepository.save(article);
    }
}
