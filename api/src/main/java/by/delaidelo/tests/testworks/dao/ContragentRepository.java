package by.delaidelo.tests.testworks.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import by.delaidelo.tests.testworks.domain.Contragent;

public interface ContragentRepository extends JpaRepository<Contragent, Long> {

    @Query("""
           SELECT c FROM Contragent c
           WHERE LOWER(c.name) LIKE LOWER(CONCAT('%', :query, '%'))
           """)
    Page<Contragent> findByQuery(@Param("query") String query, Pageable pageable);
}