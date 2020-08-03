package com.unewej.questengine.service;

import com.unewej.questengine.model.ArticleEntity;
import com.unewej.questengine.repository.ArticleRepository;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {

    ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public ArticleEntity getById(Long id) {
        return articleRepository.getOne(id);
    }

    public void save(ArticleEntity article) {
        articleRepository.save(article);
    }
}
